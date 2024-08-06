NOTAS

- comando para que funcione emulador correctamente npx expo start
- actualmente para botones es recomendado utilziar el componente de pressable ya que permite mayor edicion del mismo
- instalar npx expo lint para ayuda con los erroes
- npx expo install -- --save-dev prettier eslint-config-prettier eslint-plugin-prettier
- ScrollView es una buena opcion cuando la pagina es estatica ya que el renderiza todos elementos apesar de que el usuario no los vea
- npx expo install expo-constants, para obtener constantes como del dispositivo entre otras
- Solo funciona para IOS SafeAreaView, para realizar esto tambien se puede utilizar las constantes de expo y usar Constants.statusBarHeight y asi de esta manera funciona para android e IOS
- Cuando queires renderizar elementos dinamicos preferible usar FLatList, no envuelve children
- Para utilziar SVGs instalar npx expo install react-native-svg y utilizar pagina SVGR para convertir a un componente de React

------parte 2-------
**Para usar Tailwind**

- npm install nativewind@2
- npm install --save-dev --save-exact tailwindcss@3.3.2
- npx tailwindcss init

**Para Enrutado**

- npx expo install react-native-screens expo-linking

**configuraciones**

- para enlaces profundos agregar "scheme":"metacritic", en app.json
- en el package json cambiar el punto de entrada a "main": "expo-router/entry",
- en caso de que no tome los cambios ejecutar el comando de npx expo start -c

link en caso de ayuda : https://docs.expo.dev/router/installation/

  <!-- {/* <Text style={{ color: "#fff" }}>Titulo</Text> */}
      {/* ---------  BOTON QUE FUNCIONA NATIVO PARA TODOS------------- */}
      {/* <Button
        color="red"
        title='pulsa aqui'
        onPress={() => alert('entroooo')}
      /> */}

      {/*-------------- BOTON PARA CONTROLAR COLOR AL CLICKEAR ----------------*/}
      {/* <TouchableHighlight
      style={{ color: "#fff", height: 200, width: 200, backgroundColor: "red",
       borderRadius: 100,justifyContent:"center",alignItems:"center" }}
      onPress={() => alert('entrooo')}
      underlayColor={"#09f"}
      >
        <Text style={{ color: "#fff" }}>Titulo</Text>
      </TouchableHighlight> */}
      {/* -----------OTRO BOTON PERO CON OPACITY--------- */}
      {/* <TouchableOpacity style={{
        color: "#fff", height: 200, width: 200, backgroundColor: "red",
        borderRadius: 100, justifyContent: "center", alignItems: "center"
      }}
        onPress={() => alert('entrooo')}
        underlayColor={"#09f"}>
        <Text style={{ color: "#fff" }}>Titulo</Text>
      </TouchableOpacity> */}
      {/* -----------COMPONENTE RECOMENDADO ACTUALMENTE PARA BOTONES------------ */} -->
