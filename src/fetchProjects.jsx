import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
    space: 'knb7hjfi1kt6',
    environment: 'master', // defaults to 'master' if not set
    accessToken: '_j3cyUtPygtn8h8RqiOyga062JmjwdfolELCy_LBGp4'
});

export const useFetchProjects = () => {
    let [loading, setLoading] = useState(true);
    let [project, setProject] = useState([]);

    const getData = async () => {
        try {
            const response = await client.getEntries()
            const project = response.items.map((item) => {
                const { url, title, image } = item.fields;
                const id = item.sys.id;
                const img = image?.fields?.file?.url;
                return { title, url, id, img };
            })
            setProject(project);
            console.log(response);
            console.log('hrl');
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)

        }
    }
    useEffect(() => {
        getData();
    }, [])
    return { loading, project }

}

// client.getEntries()
// .then((entry) => console.log(entry))
// .catch(console.error)

