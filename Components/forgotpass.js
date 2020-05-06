import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { withFirebaseHOC } from '../Firebase';

class ForgotPass extends React.Component {
  state = {
    email: ""
  };

  _resetPassword = async () => {
    var params = {
      email: this.state.email
    };

    try{
      await this.props.firebase.resetPass(params.email);
      alert("Password email sent successfully");
      this.props.navigation.navigate("Login");
    }catch(error){
      alert("There was an error in sending the password reset code. Please try again or contact a system admin");
      console.log(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructionsText}>
          Enter the email you registered with and
        </Text>
        <Text style={styles.instructionsText}>
          a reset code will be sent to that email
        </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email Address"
            placeholderTextColor="#c7f1ff"
            onChangeText={text => this.setState({ email: text })}
          />
        </View>
        <TouchableOpacity style={styles.btns} onPress={this._resetPassword}>
          <Text style={styles.btnText}>RESET PASSWORD</Text>
        </TouchableOpacity>
        <Text style={styles.helperText}>Don't need to reset password?</Text>
        <TouchableOpacity
          style={styles.btns}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text style={styles.btnText}>GO BACK</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8cc6ff",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#7596a1",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    marginTop: 10,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  helperText: {
    marginTop: 18,
    marginBottom: 4,
    color: "white",
    fontSize: 16
  },
  instructionsText: {
    marginBottom: 4,
    color: "white",
    fontSize: 16
  },
  warningText: {
    color: "red",
    fontSize: 28,
    padding: 5
  },
  btns: {
    width: "80%",
    backgroundColor: "#1754e3",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10
  },
  btnText: {
    color: "white"
  }
});

export default withFirebaseHOC(ForgotPass);