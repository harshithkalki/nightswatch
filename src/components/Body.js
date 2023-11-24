import React from 'react'
import { Select, useColorMode } from '@chakra-ui/react'

const Body = () => {
    const {colorMode,toggleColorMode}=useColorMode();
    const isDark=colorMode==="dark";
    const [Tcolor,setTcolor]=React.useState('black');
    const [FontSize,setFontSize]=React.useState(15);
  return (
    <div
    style={
        {
            width:"100vw",
            height:"80vh",
            display:"flex",
            marginTop:"30px",
        }
    }
    >
        <div
        style={
            {
                width:"35%",
                height:"100%",
                borderRight:`1px solid ${isDark?"white":"black"}`,
                display:'flex',
                justifyContent:'center',
                alignItems:"center"
            }
        }
        >
            <div
            style={
                {
                    width:"80%",
                    height:"90%",
                    // border:'1px solid white'
                }
            }
            >
                <Select placeholder='Select Color' 
                onChange={
                    (e)=>{
                        setTcolor(e.target.value)
                    }
                }
                > 
                    <option value="red" >Red</option>
                    <option value="blue" >Blue</option>
                    <option value="green" >Green</option>
                    <option value="black" >Black</option>
                </Select>
                <Select placeholder='Select FontSize' 
                onChange={
                    (e)=>{
                        setFontSize(e.target.value);
                    }
                }
                style={
                    {
                        marginTop:'30px'
                    }
                }
                // value={FontSize}
                >
                    <option value={15}>
                        Small
                    </option>
                    <option value={20}>
                        Medium
                    </option>
                    <option value={25}>
                        Large
                    </option>
                </Select>

            

            </div>
        </div>
        <div
        style={
            {
                width:"65%",
                height:"100%",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                
            }
        }
        >
            <div
            style={
                {
                    width:"90%",
                    height:"90%",
                    border:`1px solid ${isDark?"white":"black"}`,
                    backgroundColor:"white",
                }
            
            }
            >
                <div
                style={{
                    width:'100%',
                    height:'100%',
                    color:`${Tcolor}`
                }}
                >
                    <div 
                    style={
                        {
                            height:"15%",
                            width:'100%',
                            textAlign:"center",
                            fontSize:"45px",
                            marginTop:"30px"

                        }
                    }
                    >
                        THE Heading
                    </div>
                    <div
                    
                    style={
                        { 
                            marginTop:'50px',
                            paddingLeft:'20px',
                            paddingRight:'20px',
                            textAlign:'start',
                            fontSize:`${FontSize}px`
                        }
                    }
                    >
                        
                        Wiki Media is a platform that allows users to personalize their reading experience 
                        by developing a user-friendly interface that enables users to set default font size 
                        and text colors. Our mission is to make reading more accessible and enjoyable 
                        for everyone.<br></br> 
                        <br></br>
                        Wiki Media's interface is designed with the user in mind. 
                        It is intuitive and easy to navigate, allowing users to personalize their reading experience.
                        
                    </div>

                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Body