import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { isAtLeastSixCharacters, isValidEmail } from "../validations/auth";
import { colors } from "../constants/colors";
import SubmitButton from "../components/submitButton";
import InputForm from "../components/inputForm";
import { useSignUpMutation } from "../services/authService";
import { setUser } from "../features/User/userSlice";
import { signupSchema } from "../validations/authSchema";
/* import { useSignUpMutation } from "../Services/authServices";
import { setUser } from "../Features/User/userSlice";
import { useSignUpMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/singupSchema"; */

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

    const dispatch = useDispatch()

    const [triggerSignUp, result] = useSignUpMutation()

    useEffect(()=> {
        if (result.isSuccess) {
            console.log("🕵🏻 ~ useEffect ~ result:", result)
            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken
                })
            )
        }
    }, [result])

    const onSubmit = () => {
        try {
            setErrorMail("")
            setErrorPassword("")
            setErrorConfirmPassword("")
            const validation = signupSchema.validateSync({email, password, confirmPassword})
            triggerSignUp({email, password, returnSecureToken: true})
        } catch (err) {
            console.log("Entro al signup del error");
            console.log(err.path);
            console.log(err.message);
            switch (err.path) {
                case "email":
                    setErrorMail(err.message)
                    break;
                case "password":
                    setErrorPassword(err.message)
                case "confirmPassword":
                    setErrorConfirmPassword(err.message)
                default:
                    break;
            }
        }
    };

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Signup</Text>
                <InputForm label={"email"} onChange={setEmail} error={errorMail} />
                <InputForm
                    label={"password"}
                    onChange={setPassword}
                    error={errorPassword}
                    isSecure={true}
                />
                <InputForm
                    label={"confirm password"}
                    onChange={setconfirmPassword}
                    error={errorConfirmPassword}
                    isSecure={true}
                />
                <SubmitButton onPress={onSubmit} title="Send" />
                <Text style={styles.sub}>Already have an account?</Text>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.subLink}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.platinum,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: "Josefin",
    },
    sub: {
        fontSize: 14,
        fontFamily: "Josefin",
        color: "black",
    },
    subLink: {
        fontSize: 14,
        fontFamily: "Josefin",
        color: "blue",
    },
});
