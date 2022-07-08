import { Appshell, Header, Navbar,Burger, MediaQuery, Text, useMantineTheme } from '@mantine/core'
import React, {useState} from 'react'



const Nav = () => {
    const [opened, setOpened] = useState(false)
    return (
        <Appshell
            
            navbarOffsetBreakpoint="sm"
            navbar = {
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} height={600} width={{ base: 300 }}>
              
                    <Navbar.Section mt='xs'> Home</Navbar.Section>
                    <Navbar.Section mt='xs'>About Me</Navbar.Section>
                    <Navbar.Section mt='xs'>Job History</Navbar.Section>
                    <Navbar.Section mt='xs'>School</Navbar.Section>
                    <Navbar.Section mt='xs'>Skills</Navbar.Section>

                </Navbar>
            }



            header={
                <Header height={70} p="md">
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                        <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        size="sm"
                        mr="xl"
                        />
                    </MediaQuery>
        
                    <Text>Application header</Text>
                    </div>
                </Header>
                }    
        >
        </Appshell>
    )
}

export default Nav