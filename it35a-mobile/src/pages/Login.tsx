import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonRouter } from "@ionic/react";
import { useRef } from "react";

const Login: React.FC = () => { 
    const navigation = useIonRouter();
    const login = useRef<HTMLIonButtonElement>(null);

    const doLogin = () => {
        login.current?.blur();
        navigation.push("/app", "forward","replace");
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen> 
                <IonButton ref={login} expand="full" onClick={() => doLogin()}>
                    Login
                </IonButton>
            </IonContent>
        </IonPage>
    );

}

export default Login;