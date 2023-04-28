interface iconProps {
  classNames?: string
}

export function SvgDownload(props: iconProps) {
  return (
    <svg
      width="14"
      height="17"
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class={props.classNames}
    >
      <path
        d="M0 17H14V15H0V17ZM14 6H10V0H4V6H0L7 13L14 6Z"
        fill="#001533"
        fill-opacity="0.8"
      />
    </svg>
  )
}
export function SvgSettings(props: iconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class={`${props.classNames} h-6 w-6 `}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  )
}

export function SvgArrow(props: iconProps) {
  return (
    <svg
      class={props.classNames}
      width="100%"
      height="auto"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5824 6.59244H3.41244L8.29244 1.71244C8.68244 1.32244 8.68244 0.682444 8.29244 0.292444C8.19993 0.19974 8.09004 0.126193 7.96907 0.0760112C7.8481 0.0258297 7.71841 0 7.58744 0C7.45648 0 7.32679 0.0258297 7.20582 0.0760112C7.08485 0.126193 6.97496 0.19974 6.88244 0.292444L0.292444 6.88244C0.199741 6.97496 0.126193 7.08485 0.0760117 7.20582C0.0258302 7.32679 0 7.45648 0 7.58744C0 7.71841 0.0258302 7.84809 0.0760117 7.96907C0.126193 8.09004 0.199741 8.19993 0.292444 8.29244L6.88244 14.8824C6.97503 14.975 7.08494 15.0485 7.2059 15.0986C7.32687 15.1487 7.45651 15.1745 7.58744 15.1745C7.71837 15.1745 7.84802 15.1487 7.96899 15.0986C8.08995 15.0485 8.19986 14.975 8.29244 14.8824C8.38503 14.7899 8.45847 14.68 8.50857 14.559C8.55868 14.438 8.58447 14.3084 8.58447 14.1774C8.58447 14.0465 8.55868 13.9169 8.50857 13.7959C8.45847 13.6749 8.38503 13.565 8.29244 13.4724L3.41244 8.59244H14.5824C15.1324 8.59244 15.5824 8.14244 15.5824 7.59244C15.5824 7.04244 15.1324 6.59244 14.5824 6.59244Z"
        fill="currentColor"
      />
    </svg>
  )
}
export function SvgSearch(props: iconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class={props.classNames}
    >
      <path
        d="M8.66667 0C10.9652 0 13.1696 0.913092 14.7949 2.53841C16.4202 4.16372 17.3333 6.36812 17.3333 8.66667C17.3333 10.8133 16.5467 12.7867 15.2533 14.3067L15.6133 14.6667H16.6667L23.3333 21.3333L21.3333 23.3333L14.6667 16.6667V15.6133L14.3067 15.2533C12.7341 16.5957 10.7343 17.3332 8.66667 17.3333C6.36812 17.3333 4.16372 16.4202 2.53841 14.7949C0.913092 13.1696 0 10.9652 0 8.66667C0 6.36812 0.913092 4.16372 2.53841 2.53841C4.16372 0.913092 6.36812 0 8.66667 0ZM8.66667 2.66667C5.33333 2.66667 2.66667 5.33333 2.66667 8.66667C2.66667 12 5.33333 14.6667 8.66667 14.6667C12 14.6667 14.6667 12 14.6667 8.66667C14.6667 5.33333 12 2.66667 8.66667 2.66667Z"
        fill-opacity="0.8"
      />
    </svg>
  )
}

export function SvgBook(props: iconProps) {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class={props.classNames}
    >
      <path
        d="M14 20C14.5304 20 15.0391 19.7893 15.4142 19.4142C15.7893 19.0391 16 18.5304 16 18V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0H8V7L5.5 5.5L3 7V0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H14Z"
        fill-opacity="0.8"
      />
    </svg>
  )
}
export function LoadingSpinner(props: iconProps) {
  return (
    <svg
      class={`animate-spin ${props.classNames}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}
export function IconClose(props: iconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      class={props.classNames}
    >
      <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM14.3 14.3C14.2075 14.3927 14.0976 14.4663 13.9766 14.5164C13.8557 14.5666 13.726 14.5924 13.595 14.5924C13.464 14.5924 13.3343 14.5666 13.2134 14.5164C13.0924 14.4663 12.9825 14.3927 12.89 14.3L10 11.41L7.11 14.3C6.92302 14.487 6.66943 14.592 6.405 14.592C6.14057 14.592 5.88698 14.487 5.7 14.3C5.51302 14.113 5.40798 13.8594 5.40798 13.595C5.40798 13.4641 5.43377 13.3344 5.48387 13.2135C5.53398 13.0925 5.60742 12.9826 5.7 12.89L8.59 10L5.7 7.11C5.51302 6.92302 5.40798 6.66943 5.40798 6.405C5.40798 6.14057 5.51302 5.88698 5.7 5.7C5.88698 5.51302 6.14057 5.40798 6.405 5.40798C6.66943 5.40798 6.92302 5.51302 7.11 5.7L10 8.59L12.89 5.7C12.9826 5.60742 13.0925 5.53398 13.2135 5.48387C13.3344 5.43377 13.4641 5.40798 13.595 5.40798C13.7259 5.40798 13.8556 5.43377 13.9765 5.48387C14.0975 5.53398 14.2074 5.60742 14.3 5.7C14.3926 5.79258 14.466 5.90249 14.5161 6.02346C14.5662 6.14442 14.592 6.27407 14.592 6.405C14.592 6.53593 14.5662 6.66558 14.5161 6.78654C14.466 6.90751 14.3926 7.01742 14.3 7.11L11.41 10L14.3 12.89C14.68 13.27 14.68 13.91 14.3 14.3Z" />
    </svg>
  )
}
export function IconDocument(props: iconProps) {
  return (
    <svg
      class={props.classNames}
      fill="currentColor"
      width="16"
      height="20"
      viewBox="0 0 16 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 0C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6.83C16 6.3 15.79 5.79 15.41 5.42L10.58 0.59C10.21 0.21 9.7 0 9.17 0H2ZM9 6V1.5L14.5 7H10C9.45 7 9 6.55 9 6Z" />
    </svg>
  )
}

export function IconWeb(props: iconProps) {
  return (
    <svg
      class={props.classNames}
      fill="currentColor"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.36 12C14.44 11.34 14.5 10.68 14.5 10C14.5 9.32 14.44 8.66 14.36 8H17.74C17.9 8.64 18 9.31 18 10C18 10.69 17.9 11.36 17.74 12H14.36ZM12.59 17.56C13.19 16.45 13.65 15.25 13.97 14H16.92C15.9512 15.6683 14.4141 16.932 12.59 17.56ZM12.34 12H7.66C7.56 11.34 7.5 10.68 7.5 10C7.5 9.32 7.56 8.65 7.66 8H12.34C12.43 8.65 12.5 9.32 12.5 10C12.5 10.68 12.43 11.34 12.34 12ZM10 17.96C9.17 16.76 8.5 15.43 8.09 14H11.91C11.5 15.43 10.83 16.76 10 17.96ZM6 6H3.08C4.03886 4.32721 5.5748 3.06149 7.4 2.44C6.8 3.55 6.35 4.75 6 6ZM3.08 14H6C6.35 15.25 6.8 16.45 7.4 17.56C5.57862 16.9317 4.04485 15.6677 3.08 14ZM2.26 12C2.1 11.36 2 10.69 2 10C2 9.31 2.1 8.64 2.26 8H5.64C5.56 8.66 5.5 9.32 5.5 10C5.5 10.68 5.56 11.34 5.64 12H2.26ZM10 2.03C10.83 3.23 11.5 4.57 11.91 6H8.09C8.5 4.57 9.17 3.23 10 2.03ZM16.92 6H13.97C13.657 4.76146 13.1936 3.5659 12.59 2.44C14.43 3.07 15.96 4.34 16.92 6ZM10 0C4.47 0 0 4.5 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z" />
    </svg>
  )
}
export function IconClock(props: iconProps) {
  return (
    <svg
      class={props.classNames}
      fill="currentColor"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM9.78 5H9.72C9.32 5 9 5.32 9 5.72V10.44C9 10.79 9.18 11.12 9.49 11.3L13.64 13.79C13.98 13.99 14.42 13.89 14.62 13.55C14.6702 13.469 14.7036 13.3788 14.7182 13.2846C14.7328 13.1905 14.7283 13.0943 14.705 13.002C14.6817 12.9096 14.64 12.8229 14.5824 12.7469C14.5249 12.671 14.4526 12.6074 14.37 12.56L10.5 10.26V5.72C10.5 5.32 10.18 5 9.78 5Z"
        fill="#015AD9"
      />
    </svg>
  )
}
export function IconBookMark(props: iconProps) {
  return (
    <svg
      class={props.classNames}
      fill="currentColor"
      width="16"
      height="20"
      viewBox="0 0 16 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V2C16 0.9 15.1 0 14 0ZM2 2H7V10L4.5 8.5L2 10V2Z" />
    </svg>
  )
}
export function IconCheck(props: iconProps) {
  return (
    <svg
      class={props.classNames}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L10.6 13.8ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
      />
    </svg>
  )
}
export function IconX(props: iconProps) {
  return (
    <svg
      class={props.classNames}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="auto"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l2.9-2.9Zm0 8.6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
      />
    </svg>
  )
}
