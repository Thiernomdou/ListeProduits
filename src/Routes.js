import Accueil from './components/Accueil';
import Detail from './components/Detail';
import Liste from './components/Liste';

export default [
    {path: '/', component: Accueil},
    {path: '/liste', component: Liste},
    {path: '/detail', component: Detail},
]