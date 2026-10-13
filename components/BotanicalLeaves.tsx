
type BotanicalLeavesProps = {
  className?: string;
};

export default function BotanicalLeaves({
  className = "",
}: BotanicalLeavesProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="#65795F" strokeWidth="1.25" strokeLinecap="round">
        {/* Main stems */}
        <path d="M28 278 C58 225 95 169 140 105 C157 81 177 48 187 20" />
        <path d="M72 220 C43 201 24 173 17 144" />
        <path d="M99 178 C132 174 158 157 177 132" />
        <path d="M124 143 C98 120 85 93 82 65" />
        <path d="M151 94 C177 93 199 80 214 61" />
        <path d="M54 239 C37 236 23 229 10 215" />

        {/* Leaves */}
        <path d="M51 211 C18 210 7 184 17 144 C44 160 61 185 51 211Z"
          fill="#B8BDAE" fillOpacity=".78" />
        <path d="M51 211 L22 159" />

        <path d="M72 196 C38 183 31 156 43 128 C66 146 80 170 72 196Z"
          fill="#D5D9CB" fillOpacity=".9" />
        <path d="M72 196 L48 140" />

        <path d="M79 204 C99 174 125 176 146 188 C128 207 103 216 79 204Z"
          fill="#AAB6A0" fillOpacity=".8" />
        <path d="M79 204 L136 191" />

        <path d="M106 168 C74 156 65 132 77 104 C99 121 113 145 106 168Z"
          fill="#B8BDAE" fillOpacity=".85" />
        <path d="M106 168 L82 116" />

        <path d="M116 158 C133 130 157 126 178 137 C161 157 138 168 116 158Z"
          fill="#D5D9CB" fillOpacity=".9" />
        <path d="M116 158 L169 139" />

        <path d="M146 105 C120 87 119 62 136 39 C153 61 160 84 146 105Z"
          fill="#AAB6A0" fillOpacity=".85" />
        <path d="M146 105 L140 48" />

        <path d="M159 84 C177 59 199 58 218 72 C200 91 178 99 159 84Z"
          fill="#B8BDAE" fillOpacity=".85" />
        <path d="M159 84 L210 73" />

        <path d="M42 250 C18 252 6 236 8 216 C28 224 42 236 42 250Z"
          fill="#D5D9CB" fillOpacity=".8" />
        <path d="M42 250 L13 222" />
      </g>
    </svg>
  );
}
