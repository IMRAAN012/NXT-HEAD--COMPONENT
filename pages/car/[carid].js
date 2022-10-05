import Head from "next/head"


function Jeep ({title,RIDER}) {
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="4x4" content={RIDER}/>
            </Head>
            <h1 className="cars">GARRAGE</h1>
        </>
    )

}
export default Jeep

export async function getServerSideProps(){
    return{
        props:{
            title:'Caar Waale',
            RIDER:'GHOST RIDER',
        },
    }
}