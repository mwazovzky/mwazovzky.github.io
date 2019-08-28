
<script>
import WordCloud from './WordCloud'

const data = [
    { text: 'Laravel', count: 50, color: 'ff2d20', rotate: 0},  
    { text: 'Vue', count: 50, color: '42b883'},  
    { text: 'PHP', count: 40, color: '474A8A'},  
    { text: 'JS', count: 40, color: 'F0DB4F'}, 
    { text: 'MySQL', count: 30, color: 'F29111'},  // '00758F'
    { text: 'HTML5', count: 25, color: 'E44D26'}, 
    { text: 'CSS', count: 25, color: '2565AE'}, 
    { text: 'Symfony', count: 25, color: '000000'},  
    { text: 'SASS', count: 20, color: 'CD6799'}, 
    { text: 'React', count: 20, color: '61DBFB'},  
    { text: 'Docker', count: 20, color: '384d54'}, 
    { text: 'MongoDB', count: 15, color: '3FA037'},  
    { text: 'Redis', count: 15, color: 'D82C20'},  
];

export default {
    name: 'TechnologyCloud',
    render(h) {
        return h(WordCloud, {
            props: { data }
        })
    }
}
</script>
