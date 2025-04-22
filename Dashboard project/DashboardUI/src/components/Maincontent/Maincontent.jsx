import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import revenueData from "../../data/revenueData.json";
import sourceData from "../../data/sourceData.json";
import { MyContext } from "../../context/DarkModeContext";
import { useContext } from "react";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
;

const Maincontent = () => {
    const { isDark, setIsDark } = useContext(MyContext);
    defaults.plugins.title.color = !isDark ? "black" : "white"
    return (
        <section className="flex-1 px-5 gap-5 flex flex-col justify-around items-center">
            <div className="bg-gray-100 dark:bg-slate-900 rounded-b-sm h-[40%] p-5 w-[90%]">
                <Line  data={{
                        labels: revenueData.map((data) => data.label),
                        datasets: [
                        {
                            label: "Revenue",
                            data: revenueData.map((data) => data.revenue),
                            backgroundColor: "#064FF0",
                            borderColor: "#064FF0",
                        },
                        {
                            label: "Cost",
                            data: revenueData.map((data) => data.cost),
                            backgroundColor: "#FF3030",
                            borderColor: "#FF3030",
                        },
                        ],
                    }}
                    options={{
                        elements: {
                        line: {
                            tension: 0.5,
                        },
                        },
                        plugins: {
                        title: {
                            text: "Monthly Revenue & Cost",
                        },
                        },
                    }}
                />
            </div>
            <div className="bg-gray-100 dark:bg-slate-900 p-5 rounded-b-sm h-[40%] w-[90%]">
                <Bar data={{
                        labels: sourceData.map((data) => data.label),
                        datasets: [
                        {
                            label: "Count",
                            data: sourceData.map((data) => data.value),
                            backgroundColor: [
                            "rgba(43, 63, 229, 0.8)",
                            "rgba(250, 192, 19, 0.8)",
                            "rgba(253, 135, 135, 0.8)",
                            ],
                            borderRadius: 5,
                        },
                        ],
                    }}
                    options={{
                        plugins: {
                        title: {
                            text: "Revenue Source",
                        },
                        },
                    }}
                />
            </div>
        </section>
    )
}

export default Maincontent;