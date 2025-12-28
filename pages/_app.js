import "@/styles/globals.css";
import "@/styles/base.scss";
import Layout from "@/component/Layout";
export default function App({ Component, pageProps, props }) {
	return (
		<Layout props={props}>
			<Component {...pageProps} />
		</Layout>
	);
}
