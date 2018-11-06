# React Native Starter Kit 
    .
    ├── ...
    ├── android   
    ├── ios
    ├── resources
        ├── android                     # Icones e Telas de abertura / Icons & SplashScreens
        ├── iOS                         # Icones e Telas de abertura / Icons & SplashScreens  
    ├── src
    │   ├── assets                      # Recursos de design / Design 
    |       ├── image                   # Imagens / Images
    |       ├── styles                  # Estilos globais / Global styles                 
    │   ├── components                  # Componentes de tela / Screen compoments
    |       ├── page                    # Container de tela / Screen Container
    │       └── ...  
    │   ├── configuration               # Configurações de ambiente / Environment Settings    
    │   ├── screens                     # Telas / Screens
            ├── welcome                 # Tela inicial / Init screen
            ├── tutorial                # Tela tutorial / Step By Step screen
            ├── login                   # Tela login / Login screen
            ├── logged-area             # Pastas com acesso restrito / Restrict Area
                ├── dashboard           # Conteúdo restrito / Restricted Content
                └── ...  
    │   ├── tools                       # Ferramentas / Helpers
            ├── animeted                # Animções diversas / Animations helpers    
    │   └── ...                 
    └── ...

```bash
git clone https://github.com/matheusgveras/react-native-starter-kit.git my-app-name
$ cd my-app-name
$ yarn
$ yarn rename "RealAppName" com.yourcompany.realappname
$ yarn start
$ react-native run-ios or react-native run-android 
```

![](https://media.giphy.com/media/xT8qBq71uHPGIR9S2A/giphy.gif)