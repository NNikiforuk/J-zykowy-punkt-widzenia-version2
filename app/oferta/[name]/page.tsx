import Layout from "@/components/common/layout/Layout";
import styles from "../page.module.scss";

const Suboffer = ({ params }: { params: { name: string } }) => {
	return <div>{params.name}</div>;
};

export default Suboffer;
