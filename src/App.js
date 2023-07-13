import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import SetupQuize from './components/SetupQuize';
import { useContext } from 'react';
import { MainContext } from './context/MainProvider';
import Loading from './components/Loading';
import Error from './components/Error';
import Quize from './components/Quize';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    const {status,questions} = useContext(MainContext);
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
           
             <Header/>
             {status === 'loading' && <Loading/>}
             {status === 'notActive' && <SetupQuize/>}
             {status === 'active' && <Quize questions={questions}/>}
             {status === 'error' && <Error/>}
        </ThemeProvider>
    );
}

export default App;
