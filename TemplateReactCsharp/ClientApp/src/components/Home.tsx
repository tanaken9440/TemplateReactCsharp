import React, { FC } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Rating from '@mui/material/Rating';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';

const options = ['Option 1', 'Option 2'];
export const Home: FC = () => {
  const [valueCb, setValueCb] = React.useState<boolean>(false);
  const [valueAc, setValueAc] = React.useState<string | null>(options[0]);
  const [valueRb, setValueRb] = React.useState<string>('female');
  const [valueRt, setValueRt] = React.useState<number | null>(2);
  const [valueSl, setValueSl] = React.useState<number>(20);
  const [valueSw, setValueSw] = React.useState<boolean>(true);
  const [inputValueAc, setInputValueAc] = React.useState('');
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Welcome to your new single-page application, built with:</p>
      <ul>
        <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
        <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
        <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
      </ul>
      <p>To help you get started, we have also set up:</p>
      <ul>
        <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
        <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
        <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
      </ul>
      <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
      <h1>Material-UI Sample</h1>

      <h2>Autocomplate</h2>
      <div>{`value: ${valueAc !== null ? `'${valueAc}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValueAc}'`}</div>
      <br/>
      <Autocomplete
        value={valueAc}
        onChange={(event: React.ChangeEvent<HTMLInputElement>, newValue: string | null) => { setValueAc(newValue); }}
        inputValue={inputValueAc}
        onInputChange={(event: React.ChangeEvent<HTMLInputElement>, newInputValue: string) => { setInputValueAc(newInputValue); }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />

      <h2>Button</h2>
      <ButtonGroup>
        <Button variant="contained" onClick={() => { alert('clicked'); }}>Contained</Button>
        <Button variant="outlined" onClick={() => { alert('clicked'); }}>Outlined</Button>
        <Button variant="text" onClick={() => { alert('clicked'); }}>Text</Button>
      </ButtonGroup>

      <h2>Checkbox</h2>
      <div>{`check: ${valueCb}`}</div>
      <FormControlLabel control={
        <Checkbox
          checked={valueCb}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setValueCb(event.target.checked); }}
        />
      } label="Label" />

      <Fab color="primary" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
        <AddIcon />
        <h2>Fab</h2>
      </Fab>

      <h2>RadioButton</h2>
      <div>{`value: ${valueRb}`}</div>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={valueRb}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setValueRb(event.target.value); }}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>

      <h2>Rating</h2>
      <div>{`value: ${valueRt}`}</div>
      <Rating
        value={valueRt}
        onChange={(event: React.ChangeEvent<HTMLInputElement>, newValue: number | null) => { setValueRt(newValue); }}
      />

      <h2>Slider</h2>
      <div>{`value: ${valueSl}`}</div>
      <Slider
        value={valueSl}
        onChange={(event: Event, newValue: number | number[]) => { setValueSl(newValue as number); }}
        valueLabelDisplay="auto"
        marks={[{ value: 0, label: '0℃' }, { value: 20, label: '20℃' }, { value: 37, label: '37℃' }, { value: 100, label: '100℃' }]}
      />

      <h2>Switch</h2>
      <Switch
        checked={valueSw}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setValueSw(event.target.checked); }}
      />

      // TODO; Tableコンポーネント、ラベルとエラーメッセージのEFCoreとの連携、テーマの切り替え
    </div>
  );
};
