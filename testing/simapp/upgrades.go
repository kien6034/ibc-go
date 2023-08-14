package simapp

import (
	storetypes "cosmossdk.io/store/types"
	upgradetypes "cosmossdk.io/x/upgrade/types"

	consensusparamtypes "github.com/cosmos/cosmos-sdk/x/consensus/types"
	crisistypes "github.com/cosmos/cosmos-sdk/x/crisis/types"

	capabilitytypes "github.com/cosmos/ibc-go/modules/capability/types"
	icacontrollertypes "github.com/cosmos/ibc-go/v7/modules/apps/27-interchain-accounts/controller/types"
	ibcmock "github.com/cosmos/ibc-go/v7/testing/mock"
	"github.com/cosmos/ibc-go/v7/testing/simapp/upgrades"
)

// registerUpgradeHandlers registers all supported upgrade handlers
func (app SimApp) registerUpgradeHandlers() {
	app.UpgradeKeeper.SetUpgradeHandler(
		upgrades.V5,
		upgrades.CreateDefaultUpgradeHandler(app.ModuleManager, app.Configurator()),
	)

	// NOTE: The moduleName arg of v6.CreateUpgradeHandler refers to the auth module ScopedKeeper name to which the channel capability should be migrated from.
	// This should be the same string value provided upon instantiation of the ScopedKeeper with app.CapabilityKeeper.ScopeToModule()
	// See: https://github.com/cosmos/ibc-go/blob/v6.1.0/testing/simapp/app.go#L310
	app.UpgradeKeeper.SetUpgradeHandler(
		upgrades.V6,
		upgrades.CreateV6UpgradeHandler(
			app.ModuleManager,
			app.Configurator(),
			app.appCodec,
			app.GetKey(capabilitytypes.ModuleName),
			app.CapabilityKeeper,
			ibcmock.ModuleName+icacontrollertypes.SubModuleName,
		),
	)

	app.UpgradeKeeper.SetUpgradeHandler(
		upgrades.V7,
		upgrades.CreateV7UpgradeHandler(
			app.ModuleManager,
			app.Configurator(),
			app.appCodec,
			app.IBCKeeper.ClientKeeper,
			app.ConsensusParamsKeeper,
			app.ParamsKeeper,
		),
	)

	app.UpgradeKeeper.SetUpgradeHandler(
		upgrades.V7_1,
		upgrades.CreateV7LocalhostUpgradeHandler(app.ModuleManager, app.Configurator(), app.IBCKeeper.ClientKeeper),
	)

	app.UpgradeKeeper.SetUpgradeHandler(
		upgrades.V8,
		upgrades.CreateV8UpgradeHandler(
			app.ModuleManager,
			app.Configurator(),
		),
	)

	upgradeInfo, err := app.UpgradeKeeper.ReadUpgradeInfoFromDisk()
	if err != nil {
		panic(err)
	}

	if upgradeInfo.Name == upgrades.V7 && !app.UpgradeKeeper.IsSkipHeight(upgradeInfo.Height) {
		storeUpgrades := storetypes.StoreUpgrades{
			Added: []string{
				consensusparamtypes.StoreKey,
				crisistypes.StoreKey,
			},
		}

		// configure store loader that checks if version == upgradeHeight and applies store upgrades
		app.SetStoreLoader(upgradetypes.UpgradeStoreLoader(upgradeInfo.Height, &storeUpgrades))
	}
}