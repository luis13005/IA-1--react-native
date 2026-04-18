import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.sub}>Faça login para continuar</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={() => router.replace('/home')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/recuperar-senha')}>
        <Text style={styles.link}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <View style={styles.rodape}>
        <Text style={styles.rodapeTexto}>Não tem conta? </Text>
        <TouchableOpacity onPress={() => router.push('/cadastro')}>
          <Text style={styles.linkDestaque}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 28,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  sub: {
    fontSize: 16,
    color: '#888',
    marginBottom: 32,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 14,
  },
  button: {
    backgroundColor: '#4A90D9',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  link: {
    color: '#4A90D9',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 32,
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rodapeTexto: {
    color: '#888',
    fontSize: 15,
  },
  linkDestaque: {
    color: '#4A90D9',
    fontSize: 15,
    fontWeight: '600',
  },
});
