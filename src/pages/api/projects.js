import snmc from '@/images/lib/snmc.png';
import cliftons from '@/images/lib/cliftons.png';
import fixnflow from '@/images/lib/fixnflow.png';
import mammoth from '@/images/lib/mammoth.png';
import guidinglight from '@/images/lib/guidinglight.png';
import svsolar from '@/images/lib/svsolar.png';
import dhilas from '@/images/lib/dhilas.png';
import rapid from '@/images/lib/rapid.png';
import crystalhotwater from '@/images/lib/crystalhotwater.png';
import hydronicfirst from '@/images/lib/hydronicfirst.png';
import homeloanoptions from '@/images/lib/homeloanoptions.png';
import guttercleaningexperts from '@/images/lib/guttercleaningexperts.png';

export default function handler(req, res) {
    const data = [
        {
            title: "Rapid Plumbing",
            link: "https://www.rapidplumbinggroup.com.au/",
            image: rapid,
            projectType: "Website",
            tools: ["CodeIgniter CMS", "PHP", "JS", "Bootstrap"]
        },
        {
            title: "Sydney Nepalese Multicultural Center",
            link: "https://snmc.org.au/",
            image: snmc,
            projectType: "Website",
            tools: ["Wordpress", "PHP", "JS", "Bootstrap"]
        },
        {
            title: "Cliftons",
            link: "https://cliftons.com/",
            image: cliftons,
            projectType: "Website",
            tools: ["Next Js", "Node Js", "Strapi", "Tailwind"]
        },
        {
            title: "FixNFlow",
            link: "https://fixnflow.com.au/",
            image: fixnflow,
            projectType: "fixnflow",
            tools: ["Wordpress", "PHP", "JS", "Tailwind"]
        },
        {
            title: "Mammoth Loans",
            link: "https://mammoth.loans/",
            image: mammoth,
            projectType: "Website",
            tools: ["Wordpress", "PHP", "JS", "Bootstrap"]
        },
        {
            title: "Guiding Light",
            link: "https://guidinglightpsychology.com.au/",
            image: guidinglight,
            projectType: "Website",
            tools: ["Wordpress", "PHP", "JS", "Bootstrap"]
        },
        {
            title: "SV Solar",
            link: "https://www.svsolar.com.au/",
            image: svsolar,
            projectType: "Website",
            tools: ["Wordpress", "PHP", "JS", "Bootstrap"]
        },
        {
            title: "Dhilas Demolition",
            link: "https://dhilas.com.au/",
            image: dhilas,
            projectType: "Website",
            tools: ["Wordpress", "PHP", "JS", "Bootstrap"]
        },
        {
            title: "Crystal Hot Water",
            link: "https://crystalhotwater.com.au/",
            image: crystalhotwater,
            projectType: "Website",
            tools: ["Wordpress", "WooCommerce", "PHP", "JS", "Bootstrap"]
        },
        {
            title: "Hydronic First",
            link: "https://hydronicfirstmelbourne.com.au/",
            image: hydronicfirst,
            projectType: "Landing Page",
            tools: ["PHP", "JS", "Bootstrap"]
        },
        {
            title: "Home Loan Options",
            link: "https://homeloanoptions.ai/",
            image: homeloanoptions,
            projectType: "Landing Page",
            tools: ["PHP", "JS", "Tailwind"]
        },
        {
            title: "Gutter Cleaning Experts",
            link: "https://guttercleaningexperts.com.au/",
            image: guttercleaningexperts,
            projectType: "Landing Page",
            tools: ["PHP", "JS", "Tailwind"]
        },
    ];

    res.status(200).json(data);
}