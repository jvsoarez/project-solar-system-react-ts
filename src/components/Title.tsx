import { ReactElement } from 'react';

interface Props {
  headline: string
}

export default function Title({ headline }: Props): ReactElement {
	return (
		<h2>{ headline }</h2>
	);
}