RegisterNuiCallbackType('submitData');
RegisterNuiCallbackType('close')
async function showInput(InputData = []) {
    SetNuiFocus(true, true);

    const Data = await new Promise((resolve) => {
        on('__cfx_nui:submitData', (data) => {
            resolve(data);
            closeInput();
        });

        on('__cfx_nui:close', () => {
            resolve(false);
            closeInput();
        });

        SendNuiMessage(JSON.stringify({
            action: 'ShowInput',
            inputData: InputData,
        }));
    });

    return Data;
}

function closeInput() {
    SetNuiFocus(false, false);
    SendNuiMessage(JSON.stringify({
        action: 'CloseInput',
    }));
}

exports('showInput', showInput);
exports('closeInput', closeInput);
