export default function OnlineOffline({online}) {
    const className = online ? "bg-green-300" : "bg-red-300";
    return <span className={className}>{online ? 'OnLine' : 'OffLine'}</span>;
}
