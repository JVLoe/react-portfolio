import ContactTitle from "./ContacTitle/ContactTitle";
import LinkedInLink from "./ContactLinks/LinkedInLink";
import GitHubLink from "./ContactLinks/GitHubLink";
import Email from "./ContactLinks/Email";
import CVDownload from "./ContactLinks/CVDownload";

const ContactContainer = () => {
    return (
        <>
            <div>
                <ContactTitle />
            </div>
            <div>
                <LinkedInLink />
                <GitHubLink />
                <Email />
                <CVDownload />
            </div>
        </>
    )
}

export default ContactContainer