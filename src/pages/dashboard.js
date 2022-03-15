
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { load_users } from '../actions/users';
import Layout from '../hocs/Layout';
import { CircularProgress } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const getDatafromLS=()=>{
  const data = localStorage.getItem('localUsers');
  if(data){
    console.log(JSON.parse(data))
    return JSON.parse(data);
  }
  else{
    return []
  }
}

const removeItemFromfromLS=(pos)=>{
  const data = localStorage.getItem('localUsers');
  if(data){
    let objectified = JSON.parse(data);
    console.log(objectified)
    objectified.forEach(element => {
       const index = objectified.indexOf(element)
       if (index === pos) {          
          let newdata = objectified.splice(index + 1, 1)
          console.log(newdata)
          localStorage.setItem("localUsers", JSON.stringify(newdata))
       }
    });
  }
  else{
    return []
  }
}


const Dashboard = () => {   



    const [localusers, setLocalusers] = useState([]);

    function reload() {
        reload = location.reload();
    }
    const dispatch = useDispatch()
    const {isLoading, users, errorMessage} = useSelector(state => state.users)

    useEffect(() => {
        dispatch(load_users())        
    }, []) 
    
    useEffect(() => {
      if (typeof window !== "undefined") {
        const d = JSON.parse(localStorage.getItem('localUsers'));
        setLocalusers(d)
        console.log("d")
        console.log(d)
        console.log(localusers)
    }
    }, []);

    return (
        <Layout
            title='Users | Dashboard'
            content=''
        >
            <div className='flex-col justify-center  w-screen'>
                {users && <div className='flex justify-evenly'>
                        <div>Number of Users : {getDatafromLS().length}</div>
                        <Button
                        onClick={reload}
                        >REFRESH</Button>
                    </div>}


                <main className='flex justify-center bg-slate-500 w-full h-9/10'>  
                <div>
                    {isLoading &&   
                    <div className='justify-center w-full h-full items-center'>
                        <CircularProgress className='h-48 w-48' color="primary" />
                    </div>
                    }
                    {errorMessage && <h2>{errorMessage}</h2>}
                    {users && getDatafromLS().map((item, index) => {
                       return(
                        <Card className='justify-center  mb-4' sx={{ minWidth: 345 }}>
                  
                          <CardMedia
                            component="img"
                            height="140"
                            image={item.picture.large}
                            alt="green iguana"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              {item.name.first}
                            </Typography>

                          </CardContent>
                     
                        <CardActions>
                          <Button
                           onClick={() => {removeItemFromfromLS(index);}}
                           size="small" color="secondary">
                            DELETE
                          </Button>
                        </CardActions>
                      </Card>
                       );
                    })}
                </div>                   
                </main>
            </div>
        </Layout>
    );
};

export default Dashboard;

