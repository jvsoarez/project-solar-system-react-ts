import { ReactElement } from 'react';

interface Props {
  headline: string
}

export default function Title({ headline }: Props): ReactElement {
	return (
		<div>
			<h2
				className={ `text-white 
				text-4xl border-solid border-2 border-slate-400
				text-center rounded-md w-4/6 mx-auto h-16 py-1.5 font-medium` }
			>
				{ headline }
			</h2>
		</div>
	);
}