import {PriceItemModel, TableItem} from "@/components/blocks/PriceItemModel";

interface PricesSectionProps{
    items: TableItem<PriceItemModel[]>
}


export default function PricesSection(props: PricesSectionProps) {
    return (
        <div className={"mt-6 rounded-2xl overflow-hidden bg-white"}>
            <table className={"table-auto md:table-fixed w-full"}>
                <thead>
                <tr>
                    {props.items.head.map((head_title, index) => (
                        <th className={"py-4 text-start px-2"} key={index}>{head_title}</th>
                    ))}
                </tr>
                </thead>
                <tbody className={"[&>*:nth-child(even)]:bg-gray-100"}>
                {props.items.items.map((item, index) => (
                    <tr key={index} className={
                        "h-10"
                    }
                    >
                        <td className={`ps-2`}>{item.title}</td>
                        <td className={"ps-2"}>{item.amount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
};
