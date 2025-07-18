import ResponsiveBox from "@/components/core/ResponsiveBox";
import ConstrainedBox from "@/components/core/constrained-box";
import GridBox from "@/components/core/GridBox";
import Column from "@/components/core/Column";
import SectionTitle from "@/components/common/SectionTitle";
import SocialButton from "./ui/SocialButton";
import socialLinks from "@/data/socialLinks";

const HomeSection6 = ({ id }: { id: string }) => {
    return (
        <ResponsiveBox
            classNames="dark:bg-[var(--dialogColor)] bg-[var(--dialogColor)] py-3 items-center justify-center dark:bg-dot-white/[0.15] bg-dot-white/[0.15] items-center justify-center"
            id={id}
        >
            <ConstrainedBox classNames="p-4 py-16">
                <SectionTitle>Get in Touch</SectionTitle>

                <Column classNames="mt-16 w-full">
                    <GridBox classNames="sm:grid-cols-2 w-full mx-auto gap-4">
                        {socialLinks.map((link, index) => {
                            return (
                                <SocialButton
                                    key={`social-link-${index}`}
                                    text={link.text}
                                    icon={link.icon}
                                    url={link.url}
                                />
                            );
                        })}
                    </GridBox>
                </Column>
            </ConstrainedBox>

            <div className="text-center pt-16 text-gray-500 ">
                <hr className=" w-screen mb-2 text-gray-600"></hr>
                <p className="mb-2 text-base">
                    Developed by{" "}
                    <span className="font-semibold">Rohit Kumar</span>.
                </p>
                <p className="text-sm text-gray-500">
                    Copyright &copy; {new Date().getFullYear()} Rohit  Kumar.
                    All rights reserved.
                </p>
            </div>
        </ResponsiveBox>
    );
};

export default HomeSection6;
