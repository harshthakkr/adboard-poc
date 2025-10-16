import { Card } from "./common/Card";
import { ICONS } from "../constants/icons";

export const SocialMediaTab = ({
  socialMedia,
}: {
  socialMedia: {
    logo: string;
    text: string;
  }[];
}) => {
  return (
    <div className="space-y-3">
      {socialMedia.map((post, index) => (
        <Card key={index} className="flex items-start gap-3">
          <img src={ICONS.QUOTES} alt="Social media post quote" />
          <div className="flex-1">
            <p>{post.text}</p>
            <div className="flex justify-end mt-2">
              <button
                className="flex items-center justify-center bg-bg-hover p-[3.2px] h-8 w-8 rounded-full cursor-pointer hover:bg-bg-hover-dark hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label="View on social media"
              >
                <img src={post.logo} alt="Social media platform" />
              </button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
