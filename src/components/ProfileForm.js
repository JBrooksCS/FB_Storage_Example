import React from 'react';
import { Header, Form, Grid, Button } from 'semantic-ui-react';
import { saveProfile } from '../APIManager/profiles'
import * as firebase from 'firebase/app'
import 'firebase/storage'
import classes from "./Profile.scss"



class ProfileForm extends React.Component {
  //via instructions from https://firebase.google.com/docs/storage/web/upload-files
  storageRef = firebase.storage().ref('profiles');

  state = {
    username: '',
    about: '',
    photo: null,
    buttonColor : "purple"
  };

  saveProfile = () => {
    //creating file, making child and giving it a unique name
    const ref = this.storageRef.child(`${Date.now()}`);
    //returns a promise
    ref.put(this.state.photo)
      .then(data => data.ref.getDownloadURL())
      .then(url => {
        saveProfile({
          username: this.state.username,
          about: this.state.about,
          photo: url
        })
        console.log(url)
      })

  }

  changeColor = () => {
    if (this.state.buttonColor === "purple"){
      this.setState({buttonColor : "blue"})
    }
    else {
      this.setState({buttonColor : "purple"})
    }
    //this.setState()
  }
  changePosition = () => {
    let posButton = document.getElementById('positionButton')
    posButton.classList.toggle('moveRight')
    this.setState()
  }

  render() {
    return (
      <div className="image-form--container">
        <Header>
          Add a Profile
        </Header>
        <Grid>
          <Grid.Row centered>
            <Grid.Column largeScreen={4} computer={6} tablet={8} mobile={12}>
              <Form onSubmit={this.saveProfile}>
                <Form.Field
                  control="input"
                  type="text"
                  label="Username"
                  onChange={(e) => this.setState({ username: e.target.value })}
                  placeholder="Username" />
                <Form.Field
                  control="input"
                  type="text"
                  label="About"
                  onChange={(e) => this.setState({ about: e.target.value })}
                  placeholder="About me" />
                <Form.Field
                  control="input"
                  type="file"
                  label="Photo"
                  onChange={(e) => this.setState({ photo: e.target.files[0] })}
                  placeholder="Upload photo" />
                <Button type="submit" content="Save" color="purple" />
                <Button type="button" style={{backgroundColor : this.state.buttonColor} }id="styleButton" content="Color Change" color="purple" onClick={() => this.changeColor()}/>
                <Button type="button" id="positionButton" content="Position Change" color="purple" onClick={() => this.changePosition()}/>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default ProfileForm;