import * as React from 'react';
import { Menu, MenuButton, MenuList, MenuItem , Button, Avatar} from '@chakra-ui/react';
import { Text, Box} from '@chakra-ui/react'
import AvatarIcon from '../../assets/fox.png'
export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu>
      <MenuButton as={Button} isActive={open} onClick={handleClick} className="text-left">
        <Box className='flex gap-2 items-center'>
      <Avatar  size='sm' name='John Doe' src={AvatarIcon} />
       <Text fontSize='md' className='text-cyan-900'>John Doe</Text>
        </Box>
      </MenuButton>
      <MenuList>
        <MenuItem> My events</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>


    // <div>
    //   <button

    //     onClick={handleClick}
    //     className="flex gap-2 w-full"
    //   >
    //       <Avatar src="fox.png" />
    //           John Doe
    //   </button>
    //   <div>
    //     <div>
    //      
    //     </div>
    //     {/* <div>
    //         <Settings fontSize="small" />
    //       Settings
    //     </div>
    //     <div>
    //         <Logout fontSize="small" />
    //       Logout
    //     </div> */}
    //   </div>
    // </div>
  );
}