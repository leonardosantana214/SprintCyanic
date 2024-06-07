// exercises.jsx
import { fetchExercisesByBodypart } from './api/exerciseDB'; // Corrigindo o caminho de importação
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useLocation, useHistory } from 'react-router-native'; // Importe useLocation e useHistory corretamente
import { StatusBar } from 'expo-status-bar';
// Remova a importação do react-native-responsive-screen, ela não é necessária aqui
import Ionicons from 'react-native-vector-icons/Ionicons';

const Exercises = () => {
    const location = useLocation();
    const history = useHistory();
    const [exercises, setExercises] = useState([]);
    const { name, image } = location.state || {};

    useEffect(() => {
        if (name) getExercises(name);
    }, [name]);

    const getExercises = async (bodypart) => {
        let data = await fetchExercisesByBodypart(bodypart);
        setExercises(data);
    }

    return (
        <View>
            <StatusBar style="light" />
            {image && (
                <Image
                    source={image}
                    style={{ width: '100%', height: 200 }} // Corrigido estilo da imagem
                />
            )}
            <TouchableOpacity
                onPress={() => history.goBack()}
                style={{ backgroundColor: 'red', position: 'absolute', top: 20, left: 10, borderRadius: 50, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}
            >
                <Ionicons name="caret-back-outline" size={30} color="white" />
            </TouchableOpacity>

            {/* exercises */}
            <View style={{ marginHorizontal: 10, marginTop: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#333' }}>
                    {name} exercises
                </Text>
                <View style={{ marginBottom: 10 }}>
                    <ExerciseList data={exercises} />
                </View>
            </View>
        </View>
    );
}

export default Exercises;
