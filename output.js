"use strict";
function names(arg) {
    let __datadog_rkfexd_0, __datadog_rkfexd_1, __datadog_rkfexd_2, __datadog_rkfexd_3;
    const flag = arg;
    const addPrefix = (value)=>(flag ? (__datadog_rkfexd_0 = value, _ddiast.tplOperator(`"${__datadog_rkfexd_0}"`, __datadog_rkfexd_0)) : (__datadog_rkfexd_0 = value, _ddiast.tplOperator(`"my_prefix.${__datadog_rkfexd_0}"`, __datadog_rkfexd_0)));
    const result = (__datadog_rkfexd_0 = addPrefix('NAME_0'), __datadog_rkfexd_1 = addPrefix('NAME_1'), __datadog_rkfexd_2 = addPrefix('NAME_2'), __datadog_rkfexd_3 = addPrefix('NAME_3'), _ddiast.tplOperator(`
      ${__datadog_rkfexd_0}
      ${__datadog_rkfexd_1}
      ${__datadog_rkfexd_2}
      ${__datadog_rkfexd_3}
    `, __datadog_rkfexd_0, __datadog_rkfexd_1, __datadog_rkfexd_2, __datadog_rkfexd_3));
    return result;
}
console.log(names(false));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUVBLFNBQVMsTUFBTSxHQUFHO0lBQUUsSUFBQSxvQkFBQSxvQkFBQSxvQkFBQTtJQUNsQixNQUFNLE9BQU87SUFDYixNQUFNLFlBQVksQ0FBQyxRQUFVLENBQUMsT0FBTyxDQUFBLHFCQUFJLE9BQUosUUFBQSxXQUFZLENBQVosQ0FBQyxDQUFDLHFCQUFRLENBQUMsQ0FBQyxxQkFBRCxJQUFJLENBQUEscUJBQWMsT0FBZCxRQUFBLFdBQXNCLENBQXRCLENBQUMsV0FBVyxxQkFBUSxDQUFDLENBQUMscUJBQUQsQ0FBQztJQUMxRSxNQUFNLFNBQVMsQ0FBQSxxQkFDVCxVQUFVLGdDQUNWLFVBQVUsZ0NBQ1YsVUFBVSxnQ0FDVixVQUFVLFdBSkQsUUFBQSxXQUtaLENBTFksQ0FBQztNQUNaLHFCQUFzQjtNQUN0QixxQkFBc0I7TUFDdEIscUJBQXNCO01BQ3RCLHFCQUFzQjtJQUN4QixDQUFDLGlGQUFEO0lBQ0YsT0FBTztBQUNUO0FBRUEsUUFBUSxHQUFHLENBQUMsTUFBTSJ9