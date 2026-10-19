import { Avatar } from "@/components/ui/Avatar";
import avatarImage from "@/assets/avatar_test.png";
import { PlusIcon } from "@/assets";

const sizes = ["xl", "lg", "default", "sm", "xs"] as const;
const variants = ["Image", "Fallback", "Icon"] as const;
const cellClassName = "border-[1px] border-border px-4 py-3";
const headerClassName = `${cellClassName} text-left font-medium`;

const AvatarDemo = () => (
	<div className="w-full overflow-x-auto">
	<table aria-label="Avatar variants and sizes" className="w-full min-w-[560px] border-collapse border-[1px] border-border text-sm">
		<thead>
			<tr>
				<th scope="col" className={headerClassName}>Variant</th>
				{sizes.map((size) => (
					<th key={size} scope="col" className={`${cellClassName} text-center font-medium`}>{size}</th>
				))}
			</tr>
		</thead>
		<tbody>
			{variants.map((variant) => (
				<tr key={variant}>
					<th scope="row" className={headerClassName}>{variant}</th>
					{sizes.map((size) => (
						<td key={size} className={cellClassName}>
							<div className="flex justify-center">
								{variant === "Image" ? (
									<Avatar src={avatarImage} alt="Alex Morgan" size={size} />
								) : variant === "Fallback" ? (
									<Avatar firstName="Alex" lastName="Morgan" aria-label="Alex Morgan" size={size} />
								) : (
									<Avatar size={size} aria-label="Add user" icon={<PlusIcon aria-hidden="true" />} />
								)}
							</div>
						</td>
					))}
				</tr>
			))}
		</tbody>
	</table>
	</div>
);

export default AvatarDemo;
