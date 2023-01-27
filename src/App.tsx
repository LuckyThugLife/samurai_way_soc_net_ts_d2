import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import  { StoreTypes} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";




const App = () => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/profile' render={() => <Profile
                       // profilePage={state.profilePage}
                      //  newPostText={state.profilePage.newPostText}
                        //dispatch={dispatch}
                       // addPost={props.store.addPost.bind(props.store)}
                        //updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
