events.listen('ui.main_menu', event => {
  event.replace(ui => {
    ui.fillBackground('kubejs:textures/founders.jpg', 1030, 595)
    ui.minecraftLogo(30)

    ui.image(i => {
      i.texture = 'kubejs:textures/trans.png'
      i.width = ui.width
      i.height = 40
      i.x = 0
      i.y = ui.height - i.height
    })

    /**
     * Create a button on the bottom right hand side of the screen.
     * @param {number} index The position (from bottom upwards) the button should be placed in the bottom right
     * @param {string} name The label of the button
     * @param {string} action The action of he button
     */
    const createBottomRightButton = (index, name, action) => {
      const PADDING = 10;

      ui.button(b => {
        b.name = name
        b.action = action
        b.x = ui.width - b.width - PADDING
        b.y = ui.height - PADDING - (b.height * (1 + index * 1.1))
      })
    }

    createBottomRightButton(3, 'Singleplayer', 'minecraft:singleplayer')
    createBottomRightButton(2, 'Multiplayer', 'minecraft:multiplayer')
    createBottomRightButton(1, 'Settings', 'minecraft:options')
    createBottomRightButton(0, 'Exit', 'minecraft:quit')

    ui.image(i => {
      i.texture = 'kubejs:textures/compsoc.png'
      i.width = 64;
      i.height = 20;
      i.x = 5
      i.y = ui.height - i.height - 5
    })

    ui.label(l => {
      l.name = text.white('Royal Holloway, Computing Society')
      l.x = 75
      l.y = ui.height - (l.height * 2.1) - 5
    })

    ui.label(web => {
      web.name = text.white('Website')
      web.x = 75
      web.y = ui.height - web.height - 5
      web.action = 'https://computingsociety.co.uk/'
      
      ui.label(discord => {
        discord.name = text.white('Discord')
        discord.x = 75 + web.width + 5
        discord.y = ui.height - discord.height - 5
        discord.action = 'https://discord.computingsociety.co.uk/'
      })
    })
  })
})
