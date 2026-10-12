import { Avatar } from "@/components/ui/Avatar";
import avatarImage from "@/assets/avatar_test.png";
import plusIcon from "@/assets/Plus.svg";
import DemoRow from "./demoRow";

const sizes = ["xl", "lg", "default", "sm", "xs"] as const;

const AvatarDemo = () => (
	<div className="flex flex-col gap-8">
		<DemoRow>
			{sizes.map((size) => (
				<div key={size} className="flex w-max shrink-0 flex-col items-center gap-3 self-stretch whitespace-nowrap">
					<span className="text-sm">{`Image-${size}`}</span>
					<Avatar src={avatarImage} alt="Alex Morgan" size={size} />
				</div>
			))}
		</DemoRow>
		<DemoRow>
			{sizes.map((size) => (
				<div key={size} className="flex w-max shrink-0 flex-col items-center gap-3 self-stretch whitespace-nowrap">
					<span className="text-sm">{`Fallback-${size}`}</span>
					<Avatar firstName="Alex" lastName="Morgan" aria-label="Alex Morgan" size={size} />
				</div>
			))}
		</DemoRow>
		<DemoRow>
			{sizes.map((size) => (
				<div key={size} className="flex w-max shrink-0 flex-col items-center gap-3 self-stretch whitespace-nowrap">
					<span className="text-sm">{`Icon-${size}`}</span>
					<Avatar
						size={size}
						aria-label="Add user"
						icon={<img src={plusIcon} alt="" className="h-1/2 w-1/2" />}
					/>
				</div>
			))}
		</DemoRow>
	</div>
);

export default AvatarDemo;
