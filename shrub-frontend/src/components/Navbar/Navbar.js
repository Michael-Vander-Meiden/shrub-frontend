import React, {useState, useEffect} from 'react';
import { FaBars, FaTimes  } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import Web3 from 'web3';
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavItemBtn,
    NavBtnLink,
 } from './Navbar.elements';



const Navbar = () => {

    useEffect(() => {

        async function loadWeb3() {
          if (window.ethereum) {
              window.web3 = new Web3(window.ethereum);
              await window.ethereum.enable();
          } else if (window.web3) {
              window.web3 = new Web3(window.web3.currentProvider);
          } else {
              console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
          }
      }
    
        loadWeb3();
        // window.web3.eth.getAccounts().then( function (result) {  console.log(result[0]) });
    
      }, []);
    
    //Load User Data to show in Navbar
    const [userAddress, setAddress] = useState("");
      
    async function getWalletAddress(){
        // await window.web3.eth.getAccounts().then( function (result) {  setAddress(result[0]) });
        // console.log(userAddress)
        return userAddress;
      }

      getWalletAddress();



    //Set interactive click instructions 
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    //Determine when to show button
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);

    return (
        
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={closeMobileMenu}>
                        <NavIcon />
                        SHRUB

                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click} >
                        <navItem>
                            <NavLinks to='/'>Home</NavLinks>
                        </navItem>
                    
                        <navItem>
                            <NavLinks to='/AccountSummary'>Account Summary</NavLinks>
                        </navItem>
                
                        <navItem>
                            <NavLinks to='/policies'>Policies</NavLinks>
                            </navItem>
                
                        <navItem>
                            <NavLinks to='/Stake'>Stake</NavLinks>
                            </navItem>
                            {/* <NavItemBtn>
                                {button ?(
                                    <NavBtnLink to="/policies">
                                        <Button primary>GET COVERAGE</Button>
                                    </NavBtnLink>
                                ) : (<NavBtnLink to="/Sign-up">
                                    <Button  fontBig primary>
                                        GET COVERAGE
                                    </Button>
                                </NavBtnLink>)}
                            </NavItemBtn> */}
                            <navItem>
                            <NavLinks to='/AccountSummary'>Wallet Address: {userAddress}  </NavLinks>
                            </navItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    )
}

export default Navbar;