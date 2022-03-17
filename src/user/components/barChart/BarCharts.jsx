import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { data } from './barChardData';
import Chartx from './barCharts.module.css';

const BarCharts = () => {
    return (
        <div className={Chartx.chartSms}>
            <ResponsiveContainer width='100%' aspect={4 / 1}>
                <BarChart data={data}>
                    <XAxis dataKey='name' stroke='#000000' />
                    <YAxis dataKey='amt' stroke="#000000" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#3521b5de" />
                    <Bar dataKey="uv" fill="rgba(75, 54, 215, 0.3)" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
 
export default BarCharts;