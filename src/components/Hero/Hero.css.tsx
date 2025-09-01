import {style} from "@vanilla-extract/css"

export const hero = style ({
    marginTop:'100px',
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:"aqua",
})

export const hero_title = style ({
    paddingLeft:'90px',
    fontSize:'50px',
    color:'#02010eff',
})

export const profile_text= style ({
    fontSize:'40px'
})


export const profile_img= style ({
    width:'18%',
    height:'auto',
})
