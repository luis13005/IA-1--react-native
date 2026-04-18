import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const menuItems = [
  { label: '1. Calculadora de IMC', route: '/imc' },
  { label: '2. Nome Composto', route: '/nome' },
  { label: '3. Verificar Maioridade', route: '/maioridade' },
  { label: '4. Em breve...', route: '/pagina4' },
  { label: '5. Em breve...', route: '/pagina5' },
];

export default function MenuScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Menu Principal</Text>
      {menuItems.map((item) => (
        <TouchableOpacity
          key={item.route}
          style={styles.button}
          onPress={() => router.push(item.route as any)}
        >
          <Text style={styles.buttonText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#333',
  },
  button: {
    width: '100%',
    backgroundColor: '#4A90D9',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
