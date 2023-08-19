import React from 'react'
import { styled } from 'styled-components'

const Section = styled.div`
display: flex;
justify-content: center;
padding:20px ;
`
const Container = styled.div`
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Right = styled.div`
   display: flex;
   align-items: center;
`
const Left = styled.div`
      display: flex;
   align-items: center;
`
const Logo = styled.img`
   height: 50px;
`
const List = styled.ul`
   list-style: none;
   display: flex;
   gap: 5px;
   margin-left: 30px;
`
const ListItem = styled.li`
   padding: 10px 15px;
   cursor: pointer;
`
const Icon = styled.img`
   height: 20px;
   cursor: pointer;
`
const Button = styled.button`
   width: 100px;
   height: 30px;
   margin-left: 15px;
   color: white;
   background-color: #da4ea2;
   border: none;
   border-radius: 5px;
   cursor: pointer;

`
const Navbar = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <Logo src="./img/logo.png" />
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Who</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Left>
                <Right>
                    <Icon src="./img/search.png" />
                    <Button>Hire Me</Button>
                </Right>
            </Container>
        </Section>
    )
}

export default Navbar