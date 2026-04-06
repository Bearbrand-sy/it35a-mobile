import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from "@ionic/react";
import { homeOutline } from "ionicons/icons";
import Home from "./Home";
import { Redirect, Route } from "react-router";
import { useRef } from "react";

const Menu: React.FC = () => { 
    const path = [
        {name: "Home", url: "/app/Home", icon: homeOutline}
    ];

    const logout = useRef<HTMLIonButtonElement>(null);

    const Logout = () => {
        logout.current?.blur();
    };

    return (
        <IonPage>
            <IonSplitPane contentId="main"> 
                <IonMenu contentId="main">
                    <IonHeader>
                            <IonToolbar>
                                <IonTitle>Menu</IonTitle>
                            </IonToolbar>   
                    </IonHeader>
                    <IonContent>

                        {path.map((item, index) => (
                            <IonMenuToggle key={index}>
                                <IonItem routerLink={item.url} routerDirection="none" onClick={(e) => (e.currentTarget as HTMLElement).blur()}>
                                    <IonIcon icon={item.icon} slot="start"></IonIcon>
                                    {item.name}
                                </IonItem>
                            </IonMenuToggle>
                        ))}

                        <IonButton ref={logout} routerLink="/" routerDirection="back" expand="full" onClick={Logout}>
                        <IonIcon icon={homeOutline} slot="start"></IonIcon>
                            Logout
                        </IonButton>
                    </IonContent>

                </IonMenu>
            <IonRouterOutlet id="main">  
                <Route  exact path="/app/Home" component={Home}/>
                <Route  exact path="/app"> 
                    <Redirect to="/app/Home"/>
                </Route>
            </IonRouterOutlet>  

            </IonSplitPane>
        </IonPage>
    );

}

export default Menu;