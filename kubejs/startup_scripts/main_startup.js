// priority 0

// shared with server_scripts for LootJS
global.blockBanList = [
  "minecraft:enchanting_table",
  "minecraft:furnace",
  "minecraft:brewing_stand",
  "minecraft:smoker",
  "minecraft:blast_furnace",
  "minecraft:campfire",
  "minecraft:soul_campfire"
]

// shared with server_scripts for LootJS
global.blockReplacementMap = {
  "minecraft:chest": "tfc:wood/chest/oak",
  "minecraft:trapped_chest": "tfc:wood/trapped_chest/oak", // won't see on jade because it is cheating
  "minecraft:barrel": "tfc:wood/barrel/oak", // not same functionality but :shrug:
  "minecraft:lectern": "tfc:wood/lectern/oak",
  "minecraft:bell": "tfc:brass_bell",
  "minecraft:torch": "tfc:torch",
  "minecraft:beehive": "firmalife:beehive"
}

StartupEvents.registry("item", (event) => {
  registerItems(event)
})

StartupEvents.registry("block", (event) => {
  registerGTCOres(event)
})

StartupEvents.registry("fluid", (event) => {
  registerFluids(event)
})

StartupEvents.postInit((event) => {
  Platform.setModName("gregitas", "Gravitas²")
})

StartupEvents.postInit((event) => {
  if (!Platform.isClientEnvironment()) return
  addTooltipToBlocks(event)
})

// TODO: Implement this
/*
global.hideAndRemoveRecipe = [
  ["minecraft:torch",{output: "minecraft:torch"}],
  [],
  [],
  [],
]
*/

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  registerMachines(event)
})

GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  registerRecipeTypes(event)
})

GTCEuStartupEvents.registry("gtceu:material", (event) => {
  registerGTCEuMaterial(event)
})

ForgeEvents.onEvent("net.minecraftforge.event.entity.EntityEvent$EnteringSection", event => {
})

ForgeEvents.onEvent("net.minecraftforge.event.entity.player.ItemTooltipEvent", event => {
  addTooltipIngots(event)
})
