
import { Menu, Item, Separator, Submenu, useContextMenu } from 'react-contexify';
import 'react-contexify/ReactContexify.css';


const MENU_ID = 'blahblah';

function ContextMenu() {
    const {show} = useContextMenu({
        id:MENU_ID,
    });

    function handleContextMenu(event){
        show({
            event,
            props:{
                key:'value'
            }
        })
    }

    const handleItemClick = ({id,event,props})=>{
        switch(id){
            case "copy":
                console.log(event,props);
            case "cut":
                console.log(event,props);
                break;
        }
    }


    return (
        <div>
            <p onContextMenu={handleContextMenu}> lorem ipsum blabladhasi blah</p>
            <Menu id={MENU_ID}>
                <Item id='copy' onClick={handleItemClick}> copy</Item>
                <Item id='cut' onClick={handleItemClick}>cut</Item>
                <Separator/>
                <Item disabled>Disabled</Item>
                <Separator/>
                <Submenu label ="Foobar">
                    <Item id="reload" onClick={handleItemClick}>Reload</Item>
                    <Item id="something" onClick={handleContextMenu}>Something</Item>
                </Submenu>
            </Menu>
        </div>
    )

}

export default ContextMenu;



