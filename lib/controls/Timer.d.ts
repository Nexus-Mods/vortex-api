/// <reference types="react" />
export interface ITimerProps {
    className?: string;
    started: number;
    paused?: boolean;
    duration: number;
    onTrigger?: () => void;
}
declare function Timer(props: ITimerProps): JSX.Element;
export default Timer;
