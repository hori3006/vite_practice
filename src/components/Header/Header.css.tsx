import {style} from '@vanilla-extract/css'

export const header = style ({
   display:'flex',
   justifyContent:'space-around',
   alignItems:'center',
})

export const header_title = style ({
  fontSize:'40px',
  color:'#030101f8'
})

export const header_nav = style ({
})

export const header_li =style ({
   display:'flex',
   justifyContent:'center',
   alignItems:'center',
   gap:'30px',
})

const base_item = style ({
    listStyle:'none',
    fontSize:'25px'
 })

 export const home_item = base_item
 export const hobby_item = base_item
 export const github_item = base_item

 export const base_link = style ({
})

 export const home_link = base_link
 export const hobby_link = base_link
 export const github_link = base_link