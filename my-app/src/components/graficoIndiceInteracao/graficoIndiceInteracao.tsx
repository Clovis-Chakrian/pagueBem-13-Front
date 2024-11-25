import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { IIndiceIntResponse } from "../../@types/IIndiceIntResponse";

interface IIGraficoIndicePagamento {
  indiceInt: IIndiceIntResponse | undefined;
  quantidadeClientes: number;
}

const GraficoIndiceInteracao: React.FC<IIGraficoIndicePagamento> = ({ indiceInt, quantidadeClientes }) => {
  const dados = indiceInt?.contas?.slice(0, quantidadeClientes)?.map((item, index) => ({
    ...item,
    uniqueKey: `${item.devedor_id}-${item.conta_id}-${item.indice_interacao}-${index}`,
  }));

  return (
    <ResponsiveContainer width="105%" height={500}>
      <BarChart
        data={dados}
        margin={{
          top: 120,
          right: 100,
          bottom: 50,
          left: 100,
        }}
        barCategoryGap={10}
        barGap={2}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="devedor_id" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="indice_interacao" stackId="a" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export { GraficoIndiceInteracao };