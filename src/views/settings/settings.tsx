import React from 'react'
import AdminViewport from '../../layouts/adminViewPort/adminViewport'
import {  FormControl, FormControlLabel, InputAdornment, OutlinedInput } from '@material-ui/core'
import { FiSearch } from 'react-icons/fi';
import SettingsCategory from '../../components/settingsCategory/settingsCategory';
import ToggleSwitch from '../../components/toggleSwitch/toggleSwitch';
import { Alert, Button } from '@mui/material';
import './settings.scss';
import LocalButton from '../../components/button/localButton';

export default function Settings() : JSX.Element {
  return (
    <div className='settings'>
      {/* page heading */}
      <AdminViewport pageName="Settings">
        {/* page body */}
        <div className='settings-body'>
          {/* page body heading */}
          <div className='settings-body-header'>
            {/* search start */}
            <FormControl variant="outlined">
              <OutlinedInput
              id="search-input"
              startAdornment={<InputAdornment position="start"><FiSearch/></InputAdornment>}
              aria-describedby="search-input"
              inputProps={{
                'aria-label': 'search',
              }}
              className='settings-body-header-search'
              />
            </FormControl>
            {/* search end */}
          </div>
          {/* page body content */}
          <div className='settings-body-content'>
            {/* inventory start */}
            <div className='settings-body-content-inventory'>
              <SettingsCategory header='Inventory' >
                <div className='settings-body-content-inventory-content'>
                  <div className='settings-body-content-inventory-content-stopInventory'>
                    <FormControlLabel
                    control={<ToggleSwitch className="" defaultChecked />}
                    label="Stop Inventory Visibility"
                    />
                    <Alert severity="error">This button will stop inventory visibility</Alert>
                  </div>
                  <div className='settings-body-content-inventory-content-addNew'>
                    <LocalButton placeholder='NEW' />
                    <Button variant="outlined" size="medium">NEW</Button>
                    <div>Add New Inventory Item</div>
                  </div>
                  
                </div>
              </SettingsCategory>
            </div>
            <div className='settings-body-content-inventory'>
              <SettingsCategory header='Inventory' >
                <div className='settings-body-content-inventory-content'>
                  <div className='settings-body-content-inventory-content-stopInventory'>
                    <FormControlLabel
                    control={<ToggleSwitch className="" defaultChecked />}
                    label="Stop Inventory Visibility"
                    />
                    <Alert severity="error">This button will stop inventory visibility</Alert>
                  </div>
                  <div className='settings-body-content-inventory-content-addNew'>
                    <LocalButton placeholder='NEW' />
                    <Button variant="outlined" size="medium">NEW</Button>
                    <div>Add New Inventory Item</div>
                  </div>
                  
                </div>
              </SettingsCategory>
            </div>
            <div className='settings-body-content-inventory'>
              <SettingsCategory header='Inventory' >
                <div className='settings-body-content-inventory-content'>
                  <div className='settings-body-content-inventory-content-stopInventory'>
                    <FormControlLabel
                    control={<ToggleSwitch className="" defaultChecked />}
                    label="Stop Inventory Visibility"
                    />
                    <Alert severity="error">This button will stop inventory visibility</Alert>
                  </div>
                  <div className='settings-body-content-inventory-content-addNew'>
                    <LocalButton placeholder='NEW' />
                    <Button variant="outlined" size="medium">NEW</Button>
                    <div>Add New Inventory Item</div>
                  </div>
                  
                </div>
              </SettingsCategory>
            </div>
            {/* inventory end */}
          </div>
        </div>
      </AdminViewport>
    </div>
  )
}
