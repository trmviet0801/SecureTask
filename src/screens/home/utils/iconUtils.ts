import DoneIcon from "../components/icons/doneIcon"
import TaskIcon from "../components/icons/taskIcon";
import PersonalIcon from "../components/icons/personalIcon";
import WorkIcon from "../components/icons/workIcon";
import BigLockIcon from "../components/icons/bigLockIcon";
import { Task } from "../components/taskList";

export enum TaskStatus {
    Finish = 'Done',
    Waiting = 'Pending'
}

export enum TaskType {
    Security = 'Security',
    Work = 'Work',
    Personal = 'Personal'
}

export const TASK_STATUS_ICON_MAP: Record<string, (props: any) => React.JSX.Element> = {
    [TaskStatus.Finish]: DoneIcon,
    [TaskStatus.Waiting]: TaskIcon
};

export const TASK_TYPE_ICON_MAP: Record<string, (props: any) => React.JSX.Element> = {
    [TaskType.Personal]: PersonalIcon,
    [TaskType.Work]: WorkIcon,
    [TaskType.Security]: BigLockIcon
}

export function GetTaskIcons({tag, isTick}: Task): Record<string, (props: any) => React.JSX.Element> {
    return {
        TaskStatusIcon: isTick ? TASK_STATUS_ICON_MAP[TaskStatus.Finish] : TASK_STATUS_ICON_MAP[TaskStatus.Waiting],
        TaskTypeIcon: TASK_TYPE_ICON_MAP[tag[1]]
    }
}