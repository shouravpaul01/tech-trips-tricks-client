"use server"

export default async function getClientIp() {
    const res = await fetch('https://api.ipify.org?format=json');
    const data=await res.json()
    return data?.ip || null;
}
